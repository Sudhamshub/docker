from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json()  # <- read JSON
    name = data.get("name")
    email = data.get("email")
    return jsonify({"message": "Received", "name": name, "email": email})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
