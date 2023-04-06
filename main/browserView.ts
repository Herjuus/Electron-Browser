import { App, BrowserView, BrowserWindow, app, screen } from "electron";

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: './preload.ts',
        }
    });

    const view = new BrowserView();
    win.setBrowserView(view);
    win.webContents.loadURL('https://google.com/');
}

app.whenReady().then(() => {
    createWindow();
});