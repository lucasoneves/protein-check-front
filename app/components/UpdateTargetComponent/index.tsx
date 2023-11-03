"use client";
import { useState } from "react";
import styles from "./UpdateTargetComponent.module.scss";
import Loading from "../Loading";
import { Toast } from "../Toast";
import { MessageFeedBackTypes, MessageType } from "@/app/lib/types";
import FormProteinTarget from "../FormProteinTarget";

export default function UpdateTargetComponent() {
  
  const [loading, setLoading] = useState(false);
  const [messageFeedback, setMessageFeedback] = useState<MessageFeedBackTypes>({
    type: MessageType.Null,
    message: "",
  });
  
  return (
    <>
      <h2 className="mt-5">Meta de proteína diária</h2>
      {messageFeedback.message && (
        <Toast messageType={messageFeedback.type}>
          <span>{messageFeedback.message}</span>
        </Toast>
      )}
      {loading ? (
        <Loading />
      ) : (
        <FormProteinTarget />
      )}
    </>
  );
}
