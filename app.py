from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return send_from_directory("public", "index.html")

@app.route("/<path:path>")
def serve_static(path):
    return send_from_directory("public", path)
    
if __name__ == '__main__':
    app.run(debug=True, port=5000)