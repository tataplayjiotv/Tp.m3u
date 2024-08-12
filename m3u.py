from flask import Flask, Response
import requests

app = Flask(__name__)

M3U_URL = 'https://gfhfgf6f2g6fdgfd.vercel.app/api/getM3u?sid=tplay_A&id=123456789&sname=tataP&tkn=xeotpxyastrplg'

@app.route('/playlist.m3u')
def get_playlist():
    response = requests.get(M3U_URL)
    if response.status_code == 200:
        return Response(response.text, mimetype='application/vnd.apple.mpegurl')
    else:
        return Response("Error fetching M3U playlist", status=500)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
