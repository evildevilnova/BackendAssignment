import express from 'express';
import env from 'dotenv';


const app = express();
env.config();

app.use(express.json());

var arr=[];

app.get('/getData',(req, res) => {
    res.status(200).send({data:arr});
});

app.post('/addData',(req, res) => {
    const { data }= req.body;
    arr=arr.concat(data);
    // arr.push(data);
    res.status(200).send({data:arr});
});

app.delete('/delete/:value', (req, res) => {
    const value = req.params.value;
    arr = arr.filter(item => item != value);

    res.json({ message: 'item deleted successfully' });
  });


app.put('/update/:value', (req, res) => {
    const value = req.params.value;
    const newData = req.body.newData;

    const Index = arr.findIndex(item => item == value);

    if (Index !== -1) {
        arr[Index] = newData;
        res.status(200).json(newData);
    } else {
        res.status(404).json({ error: 'its not found' });
    }
    });


app.listen(8000,() => {
    console.log(`connected and port no ${process.env.PORT}.`);
});
