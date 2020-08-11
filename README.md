# solidity-realstate
a solidity based smart contract template for rent apartments

1.- install ganache 
```
npm i -g ganache-cli
```

2.- install truffle 
```
npm i  -g truffle
```

3.- add ERC721  contracts
4.- (optional) install truffle flatterner and flattern the erc721 
```
node_modules/.bin/truffle-flattener ./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol > solidity/contracts/ERC721.sol
```
Adding keycloak container 

# keycloak container 
docker run -d -p 8180:8080 -e KEYCLOAK_USER=admin -e \
KEYCLOAK_PASSWORD=admin -v $(pwd):/tmp --name kc \
jboss/keycloak

# instance docker container
docker run -p 8080:8080 --name keycloak --net keycloak-network -e DB_USER=keycloak -e DB_PASSWORD=password -e DB_ADDR=postgres KEYCLOAK_USER=jorge -e KEYCLOAK_PASSWORD=1234 -v $(pwd):/tmp jboss/keycloak

# create network
docker network create keycloak-network

# postgres image :
docker run -d --name postgres --net keycloak-network -e POSTGRES_DB=keycloak -e POSTGRES_USER=keycloak -e POSTGRES_PASSWORD=password postgres

docker run --name keycloak --net keycloak-network jboss/keycloak 
