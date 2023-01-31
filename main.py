from supabase import create_client
from flask import Flask, render_template
import os

url = os.environ["supabase_url"]
key = os.environ["supabase_key"]
supabase = create_client(url, key)

def get_all_posts():
    data = supabase.table('posts').select('*').execute()
    
    return data.data

def get_top_posts():
    data = supabase.table('top_posts').select('id, posts (*)').execute()

    return data.data

def get_post(id):
    data = supabase.table('posts').select('*').eq('id', id).execute()
    return data.data[0]

app = Flask(__name__)

@app.template_filter('date_format')
def date_format(post):
    get_date = str(post['created_at'])
    split = get_date.split('T')
    split = str(split[0])
    split = split.split('-')
    year = split[0]
    month = split[1]
    day = split[2]
    full_date = '{}/{}/{}' .format(day, month, year)
    
    return full_date

@app.route('/')
def home():
    posts = get_all_posts()

    return render_template('home.html', posts=posts, top_posts = get_top_posts())

@app.route('/post/<post_id>')
def post(post_id):
    post = get_post(post_id)
    return render_template('post.html', post=post, date = date_format(post) )

app.run(host='0.0.0.0', port=5000)