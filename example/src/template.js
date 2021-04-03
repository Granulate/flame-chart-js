export const template = ({ bundle }) => (
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>flame-chart-js</title>
    <style>
        html {
            height: 100%;
        }

        body {
            height: 100%;
        }

        .root {
            display: flex;
            flex-direction: column;
            height: 75%;
        }

        .inputLabel {
            padding: 0 6px 0 16px;
        }

        .input {
            width: 100px;
        }

        .inputWrapper {
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
        }

        #inputs {
            display: inline-block;
        }

        .button {
            margin: 16px 0 0 14px;
            width: 100px;
            height: 30px;
        }
        
        .updateButton {
            flex: 1;
        }
        
        .updateButtonWrapper {
            display: flex;
        }
        
        .buttonsWrapper {
            display: inline-block;
        }
        
        .fileButtons {
            display: inline-block;  
        }
        
        .fileInput {
            display: block;
            visibility: hidden;
            width: 0;
            height: 0;
            position: absolute;
        }
        
        .footer {
            margin-top: 24px;
            display: flex;
        }
        
        .selectedNode {
            margin-left: 42px;
        }

        #wrapper {
            padding: 20px;
            border: 1px solid black;
            flex: 1;
        }
    </style>
</head>
<body>
<div class="root">
    <div id="wrapper">
        <canvas id="canvas"></canvas>
    </div>
    <div class="footer">
        <div>
            <div id="inputs">
                <div class="inputWrapper">
                    <label class="inputLabel" for="performance">performance:</label><input type="checkbox" id="performance"/>
                </div>
            </div>
            <div>
                <div class="buttonsWrapper">
                    <div class="updateButtonWrapper">
                        <button class="button updateButton" id="update-button">Generate random tree</button>
                    </div>
                    <div class="fileButtons">
                        <button class="button" id="export-button">Export</button>
                        <button class="button" id="import-button">Import</button>
                        <input class="fileInput" type="file" id="import-input"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="selectedNode">
            <pre id="selected-node"></pre>
        </div>
    </div>
</div>
${
        Object.keys(bundle).map((name) => (
            `<script src="${name}"></script>`
        ))
    }
</body>
</html>`
)
