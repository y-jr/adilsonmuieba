from flask import Flask, render_template, redirect, request, flash, send_from_directory
from flask_mail import Mail, Message

# Substitua por suas credenciais reais no arquivo config.py
from config import email, senha

app = Flask(__name__)
app.secret_key = 'qwmnb'

# Configurações do Flask-Mail
mail_settings = {
    "MAIL_SERVER": "smtp.gmail.com",
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": email,
    "MAIL_PASSWORD": senha
}

app.config.update(mail_settings)

mail = Mail(app)

# Classe para manipular os dados do contato
class Contato:
    def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem

# Rota principal
@app.route("/")
def index():
    return render_template("index.html")

# Rota para download do CV
@app.route('/download/cv')
def download_cv():
    filename = 'cv.pdf'
    return send_from_directory('static/docs', filename, as_attachment=True)

# Rota para envio de mensagens
@app.route("/send", methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        form_contato = Contato(
            request.form["nome"],
            request.form["email"],
            request.form["mensagem"]
        )

        # Configurando e enviando o email
        msg = Message(
            subject=f'{form_contato.nome} te enviou uma mensagem no portfólio',
            sender=app.config.get("MAIL_USERNAME"),
            recipients=['muiebaadilson@gmail.com'],  # Substitua pelo email do destinatário
            body=f"""
{form_contato.nome} com o email {form_contato.email} te enviou a seguinte mensagem:

{form_contato.mensagem}
"""
        )
        mail.send(msg)
        flash('Mensagem enviada com sucesso!')

    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
