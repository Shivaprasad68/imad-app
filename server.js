var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').pool;
var config ={
    user :'samalashivaprasad68',
    database:'samalashivaprasad68',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password : process.env.tillu888,
};

var app = express();
app.use(morgan('combined'));


var articleone={
    title:'shiva prasad',
    heading:'article-one',
    date:'november 27 1997',
    content:`<p>
                this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....vthis my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....
               </p>
              <p>
                this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....vthis my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....
              </p>
              <p>
                this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....vthis my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....
              </p>
              <p>
                this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....vthis my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....this my page brooo.....
             </p>
`};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=` 
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href='/'>home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
            <h4>
                yeah broo...
            </h4>
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

 var pool = new pool(config);
app.get('/test-db', function (req,res){
    pool.query('SELECT * FROM user', function (err,result)
    {
      if (err)
      {
           res.status(500).send(error.toString());
      }else
      {
         res.send(JSON.Stringify(result));
      }
    });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function (req,res){
    counter=counter + 1;
    res.send(counter.toString());
});

app-get('/article-one', function(req, res)
{
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-three', function(req, res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/main.js', function(req, res)
{
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/article-three', function(req, res)
{
    res.send(createTemplate(articleone));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
