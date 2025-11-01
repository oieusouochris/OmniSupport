import React, { useCallback } from 'react';
import { useDropzone, type Accept } from 'react-dropzone';
import { UploadCloud } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FileUploadZoneProps {
    onDrop: (acceptedFiles: File[]) => void;
    accept?: Accept;
    maxFiles?: number;
    maxSize?: number; // in bytes
}

export const FileUploadZone: React.FC<FileUploadZoneProps> = ({
    onDrop,
    accept = { 'image/*': ['.jpeg', '.png'] },
    maxFiles = 1,
    maxSize = 5 * 1024 * 1024, // 5MB
}) => {
    const onDropCallback = useCallback((acceptedFiles: File[]) => {
        onDrop(acceptedFiles);
    }, [onDrop]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: onDropCallback,
        accept,
        maxFiles,
        maxSize,
    });

    return (
        <div
            {...getRootProps()}
            className={cn(
                "flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-muted",
                isDragActive ? "border-primary" : "border-border"
            )}
        >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                <UploadCloud className="w-10 h-10 mb-3 text-muted-foreground" />
                {isDragActive ? (
                    <p className="font-semibold text-primary">Solte os arquivos aqui...</p>
                ) : (
                    <>
                        <p className="mb-2 text-sm text-foreground">
                            <span className="font-semibold">Clique para fazer upload</span> ou arraste e solte
                        </p>
                        <p className="text-xs text-muted-foreground">
                            (Máx. {maxFiles} arquivo(s), até {maxSize / 1024 / 1024}MB cada)
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};
