const app = express();
const port = 3000; // Pode alterar se necessário

// Define a pasta onde estão os arquivos HTML, CSS e JS
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});