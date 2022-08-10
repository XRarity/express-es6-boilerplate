import { Client } from "@notionhq/client"




// const notion = new Client({ auth: process.env.NOTION_KEY })
const notion = new Client({ auth: secret_notionKey })

// const databaseId = process.env.NOTION_DATABASE_ID
const databaseId = secret_databaseId

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

// addItem("Yurts in Big Sur, California")

export default addItem;