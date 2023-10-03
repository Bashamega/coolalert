// Import default_alert_css from your external CSS file
import { default_alert_css } from "./styles/css/default_temps.js";
export async function CoolAlert(text, buttons, css) {
    
    return new Promise((resolve, reject) => {
        
        if (typeof text === "undefined") {
            console.warn('Coolalert: Text undefined');
        }
    
        if (typeof css === "undefined") {
            css = "default";
        }
    
        if (typeof buttons === "undefined") {
            console.warn('Coolalert: Buttons are undefined');
            buttons = {
                cancelButton: true,
                okButton: true
            };
        } else if (typeof buttons !== 'object') {
            console.error(`Coolalert: Invalid parameter: ${typeof buttons}`);
            reject(`Coolalert: Invalid parameter: ${typeof buttons}`);
        }
    
        // Create a container for the alert
        const container = document.createElement('div');
    
        // Apply custom CSS or default styles
        const style = document.createElement('style');
        style.innerHTML = css === "default" ? default_alert_css : css;
        container.appendChild(style);
    
        // Create paragraph for text
        const paragraph = document.createElement('p');
        paragraph.innerHTML = text;
        container.appendChild(paragraph);
    
        // Create OK button
        if (buttons.okButton === true) {
            const okButton = document.createElement('button');
            okButton.innerText = "OK";
            okButton.classList.add('coolalert--button');
            okButton.classList.add('coolalert--ok');
            okButton.addEventListener('click', async () => {
                // Handle OK button click here
                const result = {
                    'operation': 'success',
                    'clicked': buttons.okButton,
                    'trueorfalse': true
                };
                container.remove();
                resolve(result);
            });
            container.appendChild(okButton);
        } else if (typeof buttons.okButton === 'string') {
            const okButton = document.createElement('button');
            okButton.innerText = buttons.okButton;
            okButton.classList.add('coolalert--button');
            okButton.classList.add('coolalert--ok');
            okButton.addEventListener('click', async () => {
                // Handle OK button click here
                const result = {
                    'operation': 'success',
                    'clicked': buttons.okButton,
                    'trueorfalse': true
                };
                container.remove();
                resolve(result);

            });
            container.appendChild(okButton);
        } else if(typeof buttons.okButton === 'object'){
            const btn = document.createElement('button');
            btn.style.fontFamily = buttons.okButton.font_family;
            btn.style.fontSize = buttons.okButton.font_size;
            btn.style.color = buttons.okButton.color;
            btn.style.backgroundColor = buttons.okButton.bg;
            btn.style.borderRadius = buttons.okButton.border_radius;
            btn.style.border = buttons.okButton.border;
            btn.style.padding = buttons.okButton.padding;
            btn.style.margin = buttons.okButton.margin;
              
            
            if(buttons.okButton.text == true){
                btn.innerHTML = 'OK'
            }else if(typeof buttons.okButton.text =='string'){
                btn.innerHTML = buttons.okButton.text;
            }else{
                btn.innerHTML = 'OK'
            }
            
            if(buttons.okButton.function && typeof buttons.okButton.function =='function'){
                btn.addEventListener('click', async () => {
                    buttons.okButton.function()
                });
            }else{
                btn.addEventListener('click', async () => {
                    // Handle OK button click here
                    const result = {
                        'operation': 'success',
                        'clicked': buttons.okButton,
                        'trueorfalse': true
                    };
                    container.remove();
                    resolve(result);
                });
            }
            btn.classList.add('coolalert--button');
            btn.classList.add('coolalert--ok');
            container.appendChild(btn);
            

        }
    
        // Create Cancel button
        if (buttons.cancelButton === true) {
            const cancelButton = document.createElement('button');
            cancelButton.innerText = "Cancel";
            cancelButton.classList.add('coolalert--button');
            cancelButton.classList.add('coolalert--cancel');
            cancelButton.addEventListener('click', async () => {
                // Handle Cancel button click here
                const result = {
                    'operation': 'success',
                    'clicked': buttons.cancelButton,
                    'trueorfalse': false
                };
                container.remove();
                resolve(result);
            });
            container.appendChild(cancelButton);
        } else if (typeof buttons.cancelButton === 'string') {
            const cancelButton = document.createElement('button');
            cancelButton.innerText = buttons.cancelButton;
            cancelButton.classList.add('coolalert--button');
            cancelButton.classList.add('coolalert--cancel');
            cancelButton.addEventListener('click', async () => {
                // Handle Cancel button click here
                const result = {
                    'operation': 'success',
                    'clicked': buttons.cancelButton,
                    'trueorfalse': false
                };
                container.remove();
                resolve(result);
            });
            container.appendChild(cancelButton);
        } else if(typeof buttons.okButton === 'object'){
            const btn = document.createElement('button');
            btn.style.fontFamily = buttons.cancelButton.font_family;
            btn.style.fontSize = buttons.cancelButton.font_size;
            btn.style.color = buttons.cancelButton.color;
            btn.style.backgroundColor = buttons.okButton.bg;
            btn.style.borderRadius = buttons.cancelButton.border_radius;
            btn.style.border = buttons.cancelButton.border;
            btn.style.padding = buttons.cancelButton.padding;
            btn.style.margin = buttons.cancelButton.margin;
              
            
            if(buttons.cancelButton.text == true){
                btn.innerHTML = 'OK'
            }else if(typeof buttons.cancelButton.text =='string'){
                btn.innerHTML = buttons.cancelButton.text;
            }else{
                btn.innerHTML = 'OK'
            }
            
            if(buttons.cancelButton.function && typeof buttons.cancelButton.function =='function'){
                btn.addEventListener('click', async () => {
                    buttons.cancelButton.function()
                });
            }else{
                btn.addEventListener('click', async () => {
                    // Handle OK button click here
                    const result = {
                        'operation': 'success',
                        'clicked': buttons.cancelButton,
                        'trueorfalse': true
                    };
                    container.remove();
                    resolve(result);
                });
            }
            btn.classList.add('coolalert--button');
            btn.classList.add('coolalert--cancel');
            container.appendChild(btn);
            

        }
    
        // Add CSS class for styling
        container.classList.add('coolalert-pop-alert');
    
        // Append the alert container to the body
        document.body.appendChild(container);

    });
};

export async function CoolInput(text, buttons, input, css) {
    
    return new Promise((resolve, reject) => {
        
        
    
        if (typeof css === "undefined") {
            css = "default";
        }
    
        if (typeof buttons === "undefined") {
            console.warn('Coolalert: Buttons are undefined');
            buttons = {
                cancelButton: true,
                okButton: true
            };
        } else if (typeof buttons !== 'object') {
            console.error(`Coolalert: Invalid parameter: ${typeof buttons}`);
            reject(`Coolalert: Invalid parameter: ${typeof buttons}`);
        }
        if (typeof input === "undefined") {
            console.warn('Coolalert: Buttons are undefined');
            input = {
                placholder: "input",
                name: "input",
            };
        } else if (typeof buttons !== 'object') {
            console.error(`Coolalert: Invalid parameter: ${typeof buttons}`);
            reject(`Coolalert: Invalid parameter: ${typeof buttons}`);
        }
    
        // Create a container for the alert
        const container = document.createElement('div');
        if (typeof text !== "undefined") {
            // Create paragraph for text
            const paragraph = document.createElement('p');
            paragraph.innerHTML = text;
            container.appendChild(paragraph);
        }
        // Apply custom CSS or default styles
        const style = document.createElement('style');
        style.innerHTML = css === "default" ? default_alert_css : css;
        container.appendChild(style);
        
        
        // Create paragraph for text
        const Input = document.createElement('input');
        Input.classList.add('coolalert--input');
        Input.style.marginBottom = '10px';
        if(input.placholder !== "undefined"){
            Input.placeholder = input.placholder;

        }
        if(input.name !=='undefined'){
            Input.name= input.placeholder
        }
        if(input.type !=='undefined'){
            Input.type = input.type
        }
        container.appendChild(Input);
        container.appendChild(document.createElement('br'));
        // Create OK button
        if (buttons.okButton === true) {
            const okButton = document.createElement('button');
            okButton.innerText = "OK";
            okButton.classList.add('coolalert--button');
            okButton.classList.add('coolalert--ok');
            okButton.addEventListener('click', async () => {
                // Handle OK button click here
                const result = {
                    'operation': 'success',
                    'clicked': buttons.okButton,
                    'trueorfalse': true,
                    'value': Input.value
                };
                container.remove();
                resolve(result);
            });
            container.appendChild(okButton);
        } else if (typeof buttons.okButton === 'string') {
            const okButton = document.createElement('button');
            okButton.innerText = buttons.okButton;
            okButton.classList.add('coolalert--button');
            okButton.classList.add('coolalert--ok');
            okButton.addEventListener('click', async () => {
                // Handle OK button click here
                const result = {
                    'operation': 'success',
                    'clicked': buttons.okButton,
                    'trueorfalse': true
                };
                container.remove();
                resolve(result);

            });
            container.appendChild(okButton);
        } else if(typeof buttons.okButton === 'object'){
            const btn = document.createElement('button');
            btn.style.fontFamily = buttons.okButton.font_family;
            btn.style.fontSize = buttons.okButton.font_size;
            btn.style.color = buttons.okButton.color;
            btn.style.backgroundColor = buttons.okButton.bg;
            btn.style.borderRadius = buttons.okButton.border_radius;
            btn.style.border = buttons.okButton.border;
            btn.style.padding = buttons.okButton.padding;
            btn.style.margin = buttons.okButton.margin;
              
            
            if(buttons.okButton.text == true){
                btn.innerHTML = 'OK'
            }else if(typeof buttons.okButton.text =='string'){
                btn.innerHTML = buttons.okButton.text;
            }else{
                btn.innerHTML = 'OK'
            }
            
            if(buttons.okButton.function && typeof buttons.okButton.function =='function'){
                btn.addEventListener('click', async () => {
                    buttons.okButton.function()
                });
            }else{
                btn.addEventListener('click', async () => {
                    // Handle OK button click here
                    const result = {
                        'operation': 'success',
                        'clicked': buttons.okButton,
                        'trueorfalse': true,
                        'value': Input.value
                    };
                    container.remove();
                    resolve(result);
                });
            }
            btn.classList.add('coolalert--button');
            btn.classList.add('coolalert--ok');
            container.appendChild(btn);
            

        }
    
        // Create Cancel button
        if (buttons.cancelButton === true) {
            const cancelButton = document.createElement('button');
            cancelButton.innerText = "Cancel";
            cancelButton.classList.add('coolalert--button');
            cancelButton.classList.add('coolalert--cancel');
            cancelButton.addEventListener('click', async () => {
                // Handle Cancel button click here
                const result = {
                    'operation': 'success',
                    'clicked': buttons.cancelButton,
                    'trueorfalse': false
                };
                container.remove();
                resolve(result);
            });
            container.appendChild(cancelButton);
        } else if (typeof buttons.cancelButton === 'string') {
            const cancelButton = document.createElement('button');
            cancelButton.innerText = buttons.cancelButton;
            cancelButton.classList.add('coolalert--button');
            cancelButton.classList.add('coolalert--cancel');
            cancelButton.addEventListener('click', async () => {
                // Handle Cancel button click here
                const result = {
                    'operation': 'success',
                    'clicked': buttons.cancelButton,
                    'trueorfalse': false
                };
                container.remove();
                resolve(result);
            });
            container.appendChild(cancelButton);
        } else if(typeof buttons.okButton === 'object'){
            const btn = document.createElement('button');
            btn.style.fontFamily = buttons.cancelButton.font_family;
            btn.style.fontSize = buttons.cancelButton.font_size;
            btn.style.color = buttons.cancelButton.color;
            btn.style.backgroundColor = buttons.okButton.bg;
            btn.style.borderRadius = buttons.cancelButton.border_radius;
            btn.style.border = buttons.cancelButton.border;
            btn.style.padding = buttons.cancelButton.padding;
            btn.style.margin = buttons.cancelButton.margin;
              
            
            if(buttons.cancelButton.text == true){
                btn.innerHTML = 'OK'
            }else if(typeof buttons.cancelButton.text =='string'){
                btn.innerHTML = buttons.cancelButton.text;
            }else{
                btn.innerHTML = 'OK'
            }
            
            if(buttons.cancelButton.function && typeof buttons.cancelButton.function =='function'){
                btn.addEventListener('click', async () => {
                    buttons.cancelButton.function()
                });
            }else{
                btn.addEventListener('click', async () => {
                    // Handle OK button click here
                    const result = {
                        'operation': 'success',
                        'clicked': buttons.cancelButton,
                        'trueorfalse': true
                    };
                    container.remove();
                    resolve(result);
                });
            }
            btn.classList.add('coolalert--button');
            btn.classList.add('coolalert--cancel');
            container.appendChild(btn);
            

        }
    
        // Add CSS class for styling
        container.classList.add('coolalert-pop-alert');
    
        // Append the alert container to the body
        document.body.appendChild(container);

    });
};
