import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import './styles/VideoModal.scss';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoSrc: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoSrc }) => {
    
    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="video-modal-overlay" onClick={onClose}>
            {/* Close button outside content for cinema feel */}
            <button className="close-modal-fixed" onClick={onClose}>
                <IonIcon icon={closeOutline} />
            </button>

            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="video-wrapper">
                    <video 
                        src={videoSrc}
                        controls 
                        autoPlay 
                        className="modal-video"
                    >
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default VideoModal;
