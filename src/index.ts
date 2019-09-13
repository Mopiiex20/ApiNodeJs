import app from "./App";
import CONFIG from "@config/config";
 import "@config/dbСonnect";

const PORT = CONFIG.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
}
);
