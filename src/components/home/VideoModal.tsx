import { X } from 'lucide-react'

export type VideoModalProps = {
  onClose: () => void
}

export default function VideoModal({ onClose }: VideoModalProps) {
  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Introduction video"
      onClick={onClose}
    >
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close video"
        >
          <X />
        </button>
        <div className="section-kicker">/ A SHORT INTRODUCTION</div>
        <h3>Meet Shagun.</h3>
        <video
          controls
          playsInline
          poster={`${import.meta.env.BASE_URL}assets/images/intro-poster.jpg`}
        >
          <source
            src={`${import.meta.env.BASE_URL}assets/video/intro.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video element.
        </video>
        <p className="video-hint">
          Thanks for stopping by. I put together this quick intro to share what
          I’m building, what drives my work, and how we can collaborate. Take a
          look around—or reach out directly if something catches your eye.
        </p>
      </div>
    </div>
  )
}
