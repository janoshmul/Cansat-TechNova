from flask import Flask,redirect,url_for,render_template,json,jsonify,after_this_request
import csv




app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/data", methods=['GET'])
def data():
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    
    jsonResp = data_to_liste('C:/Users/janos/Cansat-TechNova/Cansat/Cansat-Flask/test_data.csv')
    return jsonify(jsonResp)

if __name__ == "__main__":
    app.run(debug=True)