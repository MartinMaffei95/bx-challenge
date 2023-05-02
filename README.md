<img 
alt="Cypto Logo"
src="https://raw.githubusercontent.com/MartinMaffei95/bx-challenge/main/public/logo/Crypto-logo-big.png"
width="100%"
/>

# Betriax Challenge

## How run.

1. Execute `npm install`
2. Configure the .env file - explication on next section -
3. Execute `npm run dev` for development or `npm run start` to build and execute locally on port 4200
4. Happy hacking

## .env file.

You will need configure

```js
// API uri
VITE_CRYPTO_URI = 'https://api.coingecko.com/api/v3';
```

## Consigna

Desarrollar una app frontend que muestre los precios de las principales criptomonedas, las cuales deberán mostrar además del precio actual (`currency_price`) su market cap
(`market_cap`).  
Para esta app se deberá consumir la API Crypto coingecko.
Consignas principales:

🟢 Mostrar el precio de las primeras 50 criptomonedas vs el USD.  
🟢 Mostrar las variaciones de precios cada 2 min, en lo posible sin tener que
refrescar la página (por completo).  
🟢 Para demostrar que funcione la consigna anterior, añadir una moneda propia
(sean creativos con el nombre) cuyo precio actual y market cap, deberá variarde manera
aleatoria, para que podamos apreciar el cambio de valores (pueden utilizar la siguiente
API: www.randomnumberapi.com)  
🟢 Todo lo anterior realizando un diseño que considere apropiado para una Fintech.

## Extras

🟢 Realizar paginado, mostrando 10 criptos por página.  
🟢 Estilizar según los estilos que maneje.  
🟢 Filtros y/o SearchBar.  
🟢 Vista de detalle de cada moneda.  
🟢 Cambio de tema a modo oscuro.  
🟢 Consideraciones no obligatorias  
🟢 Utilización de frameworks como React o Next.  
🟢 Utilización de lenguaje TypeScript.
