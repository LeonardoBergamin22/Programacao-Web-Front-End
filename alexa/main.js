const Ewelink = require('ewelink-api')
const xlsx = require('xlsx')
const path = require('path');

const obiterdadosdisposivo = async (deviceID) => {
    try {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Digite seu e-mail: '), async (email) => {
            rl.question('Digite sua senha: '), async (password) => {
                rl.close();

                const ewelink = new Ewelink({
                    email: email,
                    password: password,
                });
                const workbook = XLSX.utils.book_new();
                const workshet = XLSX.utils.aoa_to_sheet([
                    ['potencia', 'voltagem', 'corrente']
                ]);
                XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

                let contador = 0
                
                const intervalo = setInterval(async () => { 
                    const device = await ewelink.getDevice(deviceID);
                    const power = device.params.power;
                    const voltage = device.params.voltage;
                    const current = device.params.current;

                    XLSX.utils.sheet_add_aoa(workbook, [[power, voltage, current]], { origin: -1 });

                    contador++;

                    if (contador >= 10) {
                        clearInterval(intervalo)

                        const filepath = path.join(__dirname, 'datosDevice.xlsx')
                        XLXS.writeFile(workbook, filepath)
                        console.log
//onde eu parei
                    }

                }, 5000);
            }
        }
    } catch (error) {
        console.error(error);
    }
};