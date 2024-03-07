"use client";

import { Candidate } from "@prisma/client";
import { ChatMessage, ChatMessageProps } from "./chat-message";
import { ElementRef, useEffect, useRef, useState } from "react";

interface ChatMessagesProps {
  messages: ChatMessageProps[];
  isLoading: boolean;
  candidate: Candidate;
}

export const ChatMessages = ({
  messages = [],
  isLoading,
  candidate,
}: ChatMessagesProps) => {
  const scrollRef = useRef<ElementRef<"div">>(null);

  const [fakeLoading, setFakeLoading] = useState(
    messages.length === 0 ? true : false
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    return () => {
      scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
    };
  }, [messages.length]);

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        isLoading={fakeLoading}
        src={candidate.src}
        role="system"
        content={`Olá, eu sou ${candidate.name}, ${candidate.description}`}
      />
      {messages.map((message) => (
        <ChatMessage
          key={message.content}
          role={message.role}
          content={message.content}
          src={candidate.src}
        />
      ))}
      {isLoading && <ChatMessage role="system" src={candidate.src} isLoading />}
      <div ref={scrollRef} />
    </div>
  );
};
