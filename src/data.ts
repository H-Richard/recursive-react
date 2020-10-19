export interface FileNode {
  id: string
  children?: FileNode[]
}

export const root: FileNode = {
  id: "C",
  children: [{
    id: "Program Files",
    children: [{
        id: "Adobe",
        children: [{
          id: "Adobe Creative Cloud"
        },
        {
          id: "Adobe Illustrator CC"
        },
        {
          id: "Adobe Premiere Pro CC"
        },
        {
          id: "Common",
          children: [{
            id: "Plug-ins"
          }]
        }]
      }]
  },
  {
    id: "Users",
    children: [{
      id: "Richard",
    },
    {
      id: "defaultuser0"
    }]
  }]
}
