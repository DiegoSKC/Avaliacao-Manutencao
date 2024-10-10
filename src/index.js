import e from "express"
import "dotenv/config"
import "./config/db.js" 
import oficina_router from "./routes/oficina_route.js"
import veiculo_router from "./routes/veiculo_route.js"
import manutencao_router from "./routes/manutencao_route.js"


const app = e()

app.use(e.json())

app.use("/oficina", oficina_router)
app.use("/veiculo", veiculo_router)
app.use("/manutencao", manutencao_router)

app.listen(process.env.API_PORT, () => console.log("servidor rodando"))
