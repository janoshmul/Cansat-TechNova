from flask import Flask,redirect,url_for,render_template,json,jsonify,after_this_request
test_list ="this is a test"


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html",test_data = test_list)


@app.route("/data", methods=['GET'])
def data():
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    jsonResp = {'jack': 4098, 'sape': 4139}
    print(jsonResp)
    return jsonify(jsonResp)

if __name__ == "__main__":
    app.run()