export type InboundMessage = {
    type: string
    locationId: string
    attachments: string[]
    body: string
    contactId: string
    contentType: string
    conversationId: string
    dateAdded: string
    direction: string
    messageType: string
}
export type OutboundMessage = {
    type: string
    locationId: string
    attachments: string[]
    body: string
    contactId: string
    contentType: string
    conversationId: string
    dateAdded: string
    direction: string
    messageType: string
    userId: string
}
export type CampaignStatusUpdate = {
    type: string
    locationId: string
    id: string
    contactId: string
    status: string
    templateId: string
    replied: string
    dateAdded: string
}
export type ContactCreate = {
    type: string
    locationId: string
    id: string
    address1: string
    city: string
    state: string
    companyName: string
    country: string
    source: string
    dateAdded: string
    dateOfBirth: string
    dnd: boolean
    email: string
    name: string
    firstName: string
    lastName: string
    phone: string
    postalCode: string
    tags: string[]
    website: string
    attachments: string[]
    assignedTo: string
}
export type ContactDelete = {
    type: string
    locationId: string
    id: string
    address1: string
    city: string
    state: string
    companyName: string
    country: string
    source: string
    dateAdded: string
    dateOfBirth: string
    dnd: boolean
    email: string
    name: string
    firstName: string
    lastName: string
    phone: string
    postalCode: string
    tags: string[]
    website: string
    attachments: string[]
    assignedTo: string
}
export type ContactDndUpdate = {
    type: string
    locationId: string
    id: string
    address1: string
    city: string
    state: string
    companyName: string
    country: string
    source: string
    dateAdded: string
    dateOfBirth: string
    dnd: boolean
    dndSettings: object
    email: string
    name: string
    firstName: string
    lastName: string
    phone: string
    postalCode: string
    tags: string[]
    website: string
    attachments: string[]
    assignedTo: string
}
export type ContactTagUpdate = {
    type: string
    locationId: string
    id: string
    address1: string
    city: string
    state: string
    companyName: string
    country: string
    source: string
    dateAdded: string
    dateOfBirth: string
    dnd: boolean
    email: string
    name: string
    firstName: string
    lastName: string
    phone: string
    postalCode: string
    tags: string[]
    website: string
    attachments: string[]
    assignedTo: string
}
export type SMS = {
    contactId: string
    locationId: string
    messageId: string
    type: string
    phone: string
    message: string
    attachments: string[]
    userId: string
}
export type ConversationUnreadUpdate = {
    type: string
    locationId: string
    id: string
    contactId: string
    deleted: boolean
    inbox: boolean
    starred: boolean
    unreadCount: number
}
export type NoteCreate = {
    type: string
    locationId: string
    id: string
    body: string
    contactId: string
    dateAdded: string
}
export type NoteDelete = {
    type: string
    locationId: string
    id: string
    body: string
    contactId: string
    dateAdded: string
}
export type OpportunityCreate = {
    type: string
    locationId: string
    id: string
    assignedTo: string
    contactId: string
    monetaryValue: number
    name: string
    pipelineId: string
    pipelineStageId: string
    source: string
    status: string
    dateAdded: string
}
export type OpportunityDelete = {
    type: string
    locationId: string
    id: string
    assignedTo: string
    contactId: string
    monetaryValue: number
    name: string
    pipelineId: string
    pipelineStageId: string
    source: string
    status: string
    dateAdded: string
}
export type OpportunityStageUpdate = {
    type: string
    locationId: string
    id: string
    assignedTo: string
    contactId: string
    monetaryValue: number
    name: string
    pipelineId: string
    pipelineStageId: string
    source: string
    status: string
    dateAdded: string
}
export type OpportunityStatusUpdate = {
    type: string
    locationId: string
    id: string
    assignedTo: string
    contactId: string
    monetaryValue: number
    name: string
    pipelineId: string
    pipelineStageId: string
    source: string
    status: string
    dateAdded: string
}
export type OpportunityAssignedToUpdate = {
    type: string
    locationId: string
    id: string
    assignedTo: string
    contactId: string
    monetaryValue: number
    name: string
    pipelineId: string
    pipelineStageId: string
    source: string
    status: string
    dateAdded: string
}
export type OpportunityMonetaryValueUpdate = {
    type: string
    locationId: string
    id: string
    assignedTo: string
    contactId: string
    monetaryValue: number
    name: string
    pipelineId: string
    pipelineStageId: string
    source: string
    status: string
    dateAdded: string
}
export type TaskCreate = {
    type: string
    locationId: string
    id: string
    assignedTo: string
    body: string
    contactId: string
    title: string
    dateAdded: string
    dueDate: string
}
export type TaskDelete = {
    type: string
    locationId: string
    id: string
    assignedTo: string
    body: string
    contactId: string
    title: string
    dateAdded: string
    dueDate: string
}
export type TaskComplete = {
    type: string
    locationId: string
    id: string
    assignedTo: string
    body: string
    contactId: string
    dateAdded: string
    dueDate: string
    title: string
}
