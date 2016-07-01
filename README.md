# Shiptendance!

You're going to build a web app powered by a Node server and a Mongo database – for pirates!

Start by running `express -e shiptendance`. In `shiptendance`, run `npm install`.

Run `npm install mongoose --save`.

Add the following code to `app.js`:

```js
// Existing code
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Method override – NEW CODE
var connect        = require('connect')
var methodOverride = require('method-override')
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

// Mongoose connection – NEW CODE
var mongoose = require('mongoose');
mongoose.connect(process.env.DB_GA_STUDENTS);

// Existing code
app.use('/', routes);
app.use('/users', users);
```

We'll recycle the `DB_GA_STUDENTS` database.

Create a folder `models` and a file `models/pirate.js`. Set up the `Pirate` model and schema – pirates should have a name and a catchphrase. Refer to today's walkthrough.

Your application should have the following routes:
* GET `/pirates`: lists all of the pirates and their information
* GET `/pirates/new`: form to add a new pirate
* POST `/pirates`: saves a new pirate from the form
* GET `/pirates/:id`: shows a single pirate

**Bonus**
* GET `/pirates/:id/edit`: form to edit a pirate
* PATCH `/pirates/:id`: updates a pirate
* DELETE `/pirates/:id`: deletes a pirate
