export default interface ModalPropsInterface {
  name: string;
  type: "number" | "email" | "date" | "text";
  required: boolean;
}
