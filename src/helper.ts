

export type Articles = {
   id: number,
   featured: boolean,
   title: "string",
   url: "string",
   imageUrl: "string",
   newsSite: "string",
   summary: "string",
   publishedAt: "string", 
   launches: Array<
     {
       id: "string",
       provider: "string"
     }
   >,
   events: Array<
     {
       id: "string",
       provider: "string"
     }
   >
   }
   export interface articleState {
     articles: Array<Articles>,
     error: null,
     loading: boolean,
     article: Array<Articles>
   }
   