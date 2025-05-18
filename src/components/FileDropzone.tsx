
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FileUp, File, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface FileDropzoneProps {
  onFilesSelected: (files: File[]) => void;
  acceptedFileTypes?: string[];
  maxFiles?: number;
  className?: string;
}

export function FileDropzone({
  onFilesSelected,
  acceptedFileTypes = [".csv", ".xlsx", ".json", ".xml", ".txt"],
  maxFiles = 5,
  className,
}: FileDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    validateAndAddFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      validateAndAddFiles(selectedFiles);
    }
  };

  const validateAndAddFiles = (newFiles: File[]) => {
    // Check if adding these files would exceed the max
    if (files.length + newFiles.length > maxFiles) {
      toast.error(`You can only upload a maximum of ${maxFiles} files`);
      return;
    }

    // Validate file types
    const validFiles = newFiles.filter(file => {
      const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
      const isAccepted = acceptedFileTypes.includes(fileExtension) || acceptedFileTypes.includes('*');
      
      if (!isAccepted) {
        toast.error(`File type not supported: ${file.name}`);
      }
      
      return isAccepted;
    });

    if (validFiles.length > 0) {
      const updatedFiles = [...files, ...validFiles];
      setFiles(updatedFiles);
      onFilesSelected(updatedFiles);
      toast.success(`${validFiles.length} file${validFiles.length > 1 ? 's' : ''} added successfully`);
    }
  };

  const removeFile = (indexToRemove: number) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    setFiles(updatedFiles);
    onFilesSelected(updatedFiles);
    toast.info("File removed");
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-10 text-center transition-colors",
          isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25",
          files.length > 0 && "border-muted-foreground/50"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          id="file-upload"
          type="file"
          multiple
          className="sr-only"
          onChange={handleFileInput}
          accept={acceptedFileTypes.join(',')}
        />
        
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="rounded-full bg-background p-3 shadow-sm">
            <FileUp className="h-8 w-8 text-insight-500" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Drop your files here or
              <label htmlFor="file-upload" className="ml-1 text-insight-500 hover:text-insight-600 cursor-pointer">
                 browse
              </label>
            </h3>
            <p className="text-sm text-muted-foreground">
              Supported formats: {acceptedFileTypes.join(", ")}
            </p>
            <p className="text-xs text-muted-foreground">
              Maximum: {maxFiles} file{maxFiles !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">Selected Files ({files.length}/{maxFiles})</h4>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => {
                setFiles([]);
                onFilesSelected([]);
              }}
            >
              Clear all
            </Button>
          </div>
          
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between bg-background border rounded-md p-3"
              >
                <div className="flex items-center space-x-3">
                  <File className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium truncate max-w-[250px]">
                      {file.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                    className="h-6 w-6 p-0"
                  >
                    <span className="sr-only">Remove file</span>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
