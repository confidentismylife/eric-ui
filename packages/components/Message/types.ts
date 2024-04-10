import type { VNode, ComponentInternalInstance } from "vue";

export const messageTypes = ["info", "success", "warning", "danger"] as const;
export type messageType = (typeof messageTypes)[number];

export interface MessageHandler {
  close(): void;
}

export type MessageFn = {
  (props: MessageParams): MessageHandler;
  closeAll(type?: messageType): void;
};

export type MessageTypeFn = (props: MessageParams) => MessageHandler;

export interface Message extends MessageFn {
  success: MessageTypeFn;
  warning: MessageTypeFn;
  info: MessageTypeFn;
  danger: MessageTypeFn;
}

export interface MessageProps {
  id: string;
  message?: string | VNode;
  duration?: number;
  showClose?: boolean;
  type?: "success" | "info" | "warning" | "danger";
  offset?: number;
  zIndex: number;
  transitionName?: string;
  onDestory(): void;
}

export type MessageOptions = Partial<Omit<MessageProps, "id">>;
export type MessageParams = string | VNode | MessageOptions;

export interface MessageInstance {
  id: string;
  vnode: VNode;
  props: MessageProps;
  vm: ComponentInternalInstance;
  handler: MessageHandler;
}

export type CreateMessageProps = Omit<
  MessageProps,
  "onDestory" | "id" | "zIndex"
>;
