const Koa = require('koa');
const KoaStaticCache = require('koa-static-cache');
const KoaRouter = require('koa-router');
const upload = require('./middlewares/upload');
const mysql = require('./node_modules/mysql2/promise');;




//建立数据库连接
// const mysql = require('mysql2');

let connection;
~async function() {
    // console.log('123')
    // 链接数据库
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'wojiaolikun1230',
        database: 'news'
    });


    function name() {

    }
    let photos = []

    // 数据库查询
    router.get('/getPhotos', async ctx => {
        photos = [];
        const [rows, fields] = await connection.execute('SELECT * FROM `photos`', []);
        // console.log('rows', rows);
        for (let i = 0; i < rows.length; i++) {
            photos.push(rows[i].pagename)
        }
        ctx.body = {
            photos
        }

    })


    // 插入数据
    // for (let i=0; i<datas.length; i++) {
    //     await connection.execute('insert into `datas` (`title`, `imgUrl`, `from`, `newTime`) values (?, ?, ?, ?)', [
    //         datas[i].title,
    //         datas[i].imgUrl,
    //         datas[i].from,
    //         datas[i].newTime
    //     ]);
    // }

}()
// const [rows, fields] = connection.execute('select * from `photos`', []);
// console.log('rows', rows);


const app = new Koa();

app.use(KoaStaticCache('./public', {
    prefix: '/public',
    gzip: true,
    dynamic: true
}));

const router = new KoaRouter();




router.get('/', async ctx => {
    ctx.body = '开课吧';
})

router.post('/upload', upload(), async ctx => {
    // console.log(ctx.request.files);
    let dot = ctx.request.files.file.path.lastIndexOf('\\')
    let filename = ctx.request.files.file.path.substring(dot + 1);
    let filenames = {
            name: '/public/static/upload/' + filename
        }
        // console.log(filenames);
    ctx.body = {
        url: '/public/static/upload/' + filename
    }
    connection.query('insert into `photos`(`pagename`) values (?)', [

            filenames.name
        ])
        // 根据ctx.request.files把数据记录到数据库中

})




app.use(router.routes());

app.listen(8081);