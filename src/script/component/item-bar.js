import "./shop-item";

class ItemBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render_init();
    }

    set shop(shop) {
        this._shop = shop;
        this.render();
       }

    get shop() {
        return this._shop;
    }

    set locations(val){
        this._locations = val;
    }

    get locations(){
        return this._locations;
    }

    set industries(val){
        this._industries = val;
    }

    get industries(){
        return this._industries;
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            :host {
                box-sizing: border-box;
                padding: 5px;
                margin: 10px;
                max-width: 900px;
                display: flex;
                flex-direction: column;
                border-radius: 10px;
                border: 1px solid #f1f6f9;
                overflow: auto;
            }
            .flex-row{
                display: flex;
                flex-direction: row;
                padding: 5px;
            }
            shop-item{
                margin: 10px;
            }
        </style>
        `; 
        let i = 0;
        this.shop.forEach(shop => {
            if (this.industries.length == 0 && this.locations.length>0){
                if (this.locations.find(loc => {
                    return loc.toLowerCase() == shop.headquarter.toLowerCase();})){
                    
                        if (window.matchMedia("(min-width: 1025px)").matches){
                            if (i%4 == 0){
                                this.shadowDOM.innerHTML += `
                                    <div class='flex-row'></div>
                                `;
                            }
                            let j = Math.floor(i/4);
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                            i+=1;
                        }
                        else if (window.matchMedia("(max-width: 1024px) and (min-width: 1000px)").matches){
                            if (i%3 == 0){
                                this.shadowDOM.innerHTML += `
                                    <div class='flex-row'></div>
                                `;
                            }
                            let j = Math.floor(i/3);
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                            i+=1;
                        }
            
                        else if (window.matchMedia("(max-width: 999px) and (min-width: 768px)").matches){
                            if (i%2 == 0){
                                this.shadowDOM.innerHTML += `
                                    <div class='flex-row'></div>
                                `;
                            }
                            let j = Math.floor(i/2);
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                            i+=1;
                        }
            
                        else if (window.matchMedia("(min-width: 541px) and (max-width: 768px)").matches){
                            if (i%2 == 0){
                                this.shadowDOM.innerHTML += `
                                    <div class='flex-row'></div>
                                `;
                            }
                            let j = Math.floor(i/2);
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                            i+=1;
                        }
            
                        else if (window.matchMedia("(min-width: 280px) and (max-width: 540px)").matches){
                            this.shadowDOM.innerHTML += `
                                <div class='flex-row'></div>
                            `;
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[i].appendChild(shopItemElement);
                            i+=1;
                        }
                }
            }
            else if (this.locations.length == 0 && this.industries.length>0){
                if (this.industries.find(ind => {
                    return ind.toLowerCase() == shop.industry.toLowerCase();})){

                        if (window.matchMedia("(min-width: 1025px)").matches){
                            if (i%4 == 0){
                                this.shadowDOM.innerHTML += `
                                    <div class='flex-row'></div>
                                `;
                            }
                            let j = Math.floor(i/4);
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                            i+=1;
                        }
                        else if (window.matchMedia("(max-width: 1024px) and (min-width: 1000px)").matches){
                            if (i%3 == 0){
                                this.shadowDOM.innerHTML += `
                                    <div class='flex-row'></div>
                                `;
                            }
                            let j = Math.floor(i/3);
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                            i+=1;
                        }
            
                        else if (window.matchMedia("(max-width: 999px) and (min-width: 768px)").matches){
                            if (i%2 == 0){
                                this.shadowDOM.innerHTML += `
                                    <div class='flex-row'></div>
                                `;
                            }
                            let j = Math.floor(i/2);
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                            i+=1;
                        }
            
                        else if (window.matchMedia("(min-width: 541px) and (max-width: 768px)").matches){
                            if (i%2 == 0){
                                this.shadowDOM.innerHTML += `
                                    <div class='flex-row'></div>
                                `;
                            }
                            let j = Math.floor(i/2);
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                            i+=1;
                        }
            
                        else if (window.matchMedia("(min-width: 280px) and (max-width: 540px)").matches){
                            this.shadowDOM.innerHTML += `
                                <div class='flex-row'></div>
                            `;
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[i].appendChild(shopItemElement);
                            i+=1;
                        }
                }
            }
            else if (this.locations.length == 0 && this.industries.length == 0){
                if (window.matchMedia("(min-width: 1025px)").matches){
                    if (i%4 == 0){
                        this.shadowDOM.innerHTML += `
                            <div class='flex-row'></div>
                        `;
                    }
                    let j = Math.floor(i/4);
                    const shopItemElement = document.createElement("shop-item");
                    shopItemElement.shop = shop;
                    this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                    i+=1;
                }
                else if (window.matchMedia("(max-width: 1024px) and (min-width: 1000px)").matches){
                    if (i%3 == 0){
                        this.shadowDOM.innerHTML += `
                            <div class='flex-row'></div>
                        `;
                    }
                    let j = Math.floor(i/3);
                    const shopItemElement = document.createElement("shop-item");
                    shopItemElement.shop = shop;
                    this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                    i+=1;
                }
    
                else if (window.matchMedia("(max-width: 999px) and (min-width: 768px)").matches){
                    if (i%2 == 0){
                        this.shadowDOM.innerHTML += `
                            <div class='flex-row'></div>
                        `;
                    }
                    let j = Math.floor(i/2);
                    const shopItemElement = document.createElement("shop-item");
                    shopItemElement.shop = shop;
                    this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                    i+=1;
                }
    
                else if (window.matchMedia("(min-width: 541px) and (max-width: 768px)").matches){
                    if (i%2 == 0){
                        this.shadowDOM.innerHTML += `
                            <div class='flex-row'></div>
                        `;
                    }
                    let j = Math.floor(i/2);
                    const shopItemElement = document.createElement("shop-item");
                    shopItemElement.shop = shop;
                    this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                    i+=1;
                }
    
                else if (window.matchMedia("(min-width: 280px) and (max-width: 540px)").matches){
                    this.shadowDOM.innerHTML += `
                        <div class='flex-row'></div>
                    `;
                    const shopItemElement = document.createElement("shop-item");
                    shopItemElement.shop = shop;
                    this.shadowDOM.querySelectorAll('.flex-row')[i].appendChild(shopItemElement);
                    i+=1;
                }
            }
            else {
                if (this.industries.find(ind => {
                    return ind.toLowerCase() == shop.industry.toLowerCase();}) && 
                    this.locations.find(loc => {
                    return loc.toLowerCase() == shop.headquarter.toLowerCase();})){

                        if (window.matchMedia("(min-width: 1025px)").matches){
                            if (i%4 == 0){
                                this.shadowDOM.innerHTML += `
                                    <div class='flex-row'></div>
                                `;
                            }
                            let j = Math.floor(i/4);
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                            i+=1;
                        }
                        else if (window.matchMedia("(max-width: 1024px) and (min-width: 1000px)").matches){
                            if (i%3 == 0){
                                this.shadowDOM.innerHTML += `
                                    <div class='flex-row'></div>
                                `;
                            }
                            let j = Math.floor(i/3);
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                            i+=1;
                        }
            
                        else if (window.matchMedia("(max-width: 999px) and (min-width: 768px)").matches){
                            if (i%2 == 0){
                                this.shadowDOM.innerHTML += `
                                    <div class='flex-row'></div>
                                `;
                            }
                            let j = Math.floor(i/2);
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                            i+=1;
                        }
            
                        else if (window.matchMedia("(min-width: 541px) and (max-width: 768px)").matches){
                            if (i%2 == 0){
                                this.shadowDOM.innerHTML += `
                                    <div class='flex-row'></div>
                                `;
                            }
                            let j = Math.floor(i/2);
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[j].appendChild(shopItemElement);
                            i+=1;
                        }
            
                        else if (window.matchMedia("(min-width: 280px) and (max-width: 540px)").matches){
                            this.shadowDOM.innerHTML += `
                                <div class='flex-row'></div>
                            `;
                            const shopItemElement = document.createElement("shop-item");
                            shopItemElement.shop = shop;
                            this.shadowDOM.querySelectorAll('.flex-row')[i].appendChild(shopItemElement);
                            i+=1;
                        }
                }
            }
        });        
    }

    render_init(){
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    overflow: auto;
                }
                .flex-row{
                    display: flex;
                    flex-direction: row;
                    padding: 5px;
                }
                shop-item{
                    margin: 10px;
                }
            </style>
        `; 
    }
}

customElements.define("item-bar", ItemBar);