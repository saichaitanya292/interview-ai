"use client";
import { useRef, useState } from "react";

export default function Interview() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [chunks, setChunks] = useState<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    try {
      setChunks([]); // reset previous recording

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e: BlobEvent) => {
        if (e.data.size > 0) {
          setChunks((prev) => [...prev, e.data]);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        console.log("Recorded Blob:", blob);

        // Stop all tracks after recording
        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="p-10">
      <video
        ref={videoRef}
        autoPlay
        muted
        className="w-96 mb-4 border rounded"
      />

      <div className="space-x-2">
        <button
          onClick={startRecording}
          disabled={isRecording}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Start
        </button>

        <button
          onClick={stopRecording}
          disabled={!isRecording}
          className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Stop
        </button>
      </div>
    </div>
  );
}