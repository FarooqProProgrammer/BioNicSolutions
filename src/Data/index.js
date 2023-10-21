import { AWS, ApollowClient, AppDesign, ElasticSearch, GraphQl, Java, ListIcon, MYSQL, MaterialUI, Mongo, NextJS, NodeJS, PostSql, REDIS, ReactJS, RestApi, SpringBoot, Typescript } from "../assets/Icons";

function generateRandomID(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomID = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomID += charset.charAt(randomIndex);
    }

    return randomID;
}

export const FrontEnd = [

            {
                id: generateRandomID(10),
                text: '[GraphQl]',
                icon: GraphQl
            },
            {
                id: generateRandomID(10),
                text: '[React Hook Form]',
                icon: ListIcon
            },
            {
                id: generateRandomID(10),
                text: '[App Design]',
                icon: AppDesign
            },
            {
                id: generateRandomID(10),
                text: '[Materiel Ui]',
                icon: MaterialUI
            },
            {
                id: generateRandomID(10),
                text: '[Apollow Client]',
                icon: ApollowClient
            },
            {
                id: generateRandomID(10),
                text: '[Next JS]',
                icon: NextJS
            },
            {
                id: generateRandomID(10),
                text: '[React JS]',
                icon: ReactJS
            },
            {
                id: generateRandomID(10),
                text: '[Rest Api]',
                icon: RestApi
            },
            {
                id: generateRandomID(10),
                text: '[Typescript]',
                icon: Typescript
            },

]

export const backend =[
    {
        id: generateRandomID(10),
        text: '[Spring]',
        icon: SpringBoot
    },
    {
        id: generateRandomID(10),
        text: '[JAVA]',
        icon: Java
    },
    {
        id: generateRandomID(10),
        text: '[NODEJS]',
        icon: NodeJS
    },
]

export const DataBase = [
    {
        id: generateRandomID(10),
        text: '[AWS]',
        icon: AWS
    },
    {
        id: generateRandomID(10),
        text: '[MONGODB]',
        icon: Mongo
    },
    {
        id: generateRandomID(10),
        text: '[REDIX]',
        icon: REDIS
    },
    {
        id: generateRandomID(10),
        text: '[Elastic Search]',
        icon: ElasticSearch
    },
    {
        id: generateRandomID(10),
        text: '[Mysql]',
        icon: MYSQL
    },
    {
        id: generateRandomID(10),
        text: '[POSTGRESQL]',
        icon: PostSql
    },
]
