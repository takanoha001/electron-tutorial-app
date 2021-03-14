import { app, BrowserWindow, Menu } from 'electron';

let mainWindow: any;

const createWindow = () => {
    mainWindow = new BrowserWindow({
    width: 500,
    height: 200,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  //open dev tool
  mainWindow.webContents.openDevTools({ mode: 'detach' });

  mainWindow.loadFile('public/index.html');
};


app.whenReady().then(async () => {
  //create main window
  createWindow();
  //build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  //insert menu
  Menu.setApplicationMenu(mainMenu);

});

app.once('window-all-closed', () => app.quit);

const mainMenuTemplate = [
  {
    label: "la",
  },
  {
    label: "File",
    submenu: [
      {
        label: "Quit",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q", //mac for darwin
        click() {
          app.quit(); //control Q
        },
      },
    ],
  },
];