export type ErrorTypes = {
  message: string;
  field: string
};

export type ProteinIten = {
  createdAt: string;
  quantity: number;
  id: string | null;
};

export enum MessageType {
  Null = "",
  Error = "error",
  Success = "success",
}

export type MessageFeedBackTypes = {
  type: MessageType;
  message: string;
};