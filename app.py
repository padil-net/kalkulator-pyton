from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    hasil = ""

    if request.method == "POST":
        angka1 = float(request.form["angka1"])
        angka2 = float(request.form["angka2"])
        operator = request.form["operator"]

        if operator == "+":
            hasil = angka1 + angka2
        elif operator == "-":
            hasil = angka1 - angka2
        elif operator == "*":
            hasil = angka1 * angka2
        elif operator == "/":
            hasil = "Error" if angka2 == 0 else angka1 / angka2

    return render_template("index.html", hasil=hasil)


if __name__ == "__main__":
    app.run(debug=True)