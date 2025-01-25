from flask import Flask , render_template , send_from_directory , request
from flask_sqlalchemy import SQLAlchemy
import ssl , os

ssl._create_default_https_context = ssl._create_unverified_context

app=Flask(__name__)

# Set the static folder to 'static' (it's the default, so you can omit this line)
app.config['STATIC_FOLDER'] = 'static'
@app.after_request
def apply_cache_control(response):
    if request.path.startswith('/static/'):
        # Apply cache headers to all static files
        response.cache_control.public = True
        response.cache_control.max_age = 3600  # Cache for 1 hour (you can adjust this as needed)
    return response

# @app.route('/static/<path:filename>')
# def send_static_file(filename):
#     directory = os.path.join(app.root_path, 'static')
#     return send_from_directory(directory, filename)

#database for conatct users
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contact.db'
# contact_db = SQLAlchemy(app)


# #create a new class for creating database

# # Define the contact_user model
# class ContactUser(contact_db.Model):
#     id = contact_db.Column(contact_db.Integer, primary_key=True)
#     name = contact_db.Column(contact_db.String(100))
#     email = contact_db.Column(contact_db.String(100))
#     msg = contact_db.Column(contact_db.Text)


# # Function to create database tables
# def create_tables():
#     with app.app_context():
#         contact_db.create_all()

# # Run the function before the first request
# @app.before_first_request
# def before_first_request_func():
#     create_tables()

# # # Define a custom 404 error page
# @app.errorhandler(404)
# def page_not_found(error):
#     # Render the template named '404.html'
#     return render_template('404.html'), 404



#Main Pages
@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html') 


 
# @app.route('/books')
# def book():
#     return redirect('a.html')
#    return redirect('https://cal.com/crypto-buddy-yodvtm/doctor') 


@app.route('/g')
def gallery():
    return render_template('gallery.html')


@app.route('/know')
def know():
    return render_template('special.html') 


@app.route('/Journey')
def journey():
    return render_template('journery.html') 

# @app.route('/contact')
# def contact():
#     return render_template('contact.html') 

@app.route("/map")
def map_page():
    return render_template("map.html")


@app.route("/footer")
def footer_section():
    return render_template("footer.html")

@app.route("/jour")
def booking():
    return render_template("booking.html")






@app.route('/contact', methods=['GET', 'POST'])
def contact():
    # if request.method == 'POST':
    #     # Form has been submitted
    #     name = request.form['name']
    #     email = request.form['email']
    #     message = request.form['message']
        

    #     # Create a new ContactUser object
    #     new_contact = ContactUser(name=name, email=email, msg=message)
        
    #     # Add the new contact to the session
    #     contact_db.session.add(new_contact)
        
    #     # Commit the session to save the new contact to the database
    #     contact_db.session.commit()

        
        # You can also perform other actions like saving the data to a database
    
    # Get the user information if any
    return render_template('contact.html',show_footer=True)




#Blogs 
@app.route("/home/blog1")
def blogs1():
    return render_template("blogs/blog1.html")


#Works 
@app.route('/work/i')
def work_page():
    return render_template('work/i-could-but-i-wont.html')


if __name__ == '__main__':
    # with app.app_context():
    #     contact_db.create_all()
    app.run(host="0.0.0.0", port=8080, debug=True)

    

