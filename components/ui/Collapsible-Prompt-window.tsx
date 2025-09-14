import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { MoreHorizontal, ImagePlus, XCircle, Loader2 } from "lucide-react";

export default function ImageTrainerUI() {
  const [isStyle, setIsStyle] = useState(false);
  const [images, setImages] = useState<string[]>([]); // To store image data URLs
  const [zipFile, setZipFile] = useState<File | null>(null); // To store a zip file
  const [imageUrlInput, setImageUrlInput] = useState<string>(""); // For URL input
  const [isTrainingStarted, setIsTrainingStarted] = useState(false);
  const [trainedImageUrl, setTrainedImageUrl] = useState<string | null>(null);
  const [rightPanelExpanded, setRightPanelExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlAdd = () => {
    if (imageUrlInput.trim() !== "") {
      setImages((prevImages) => [...prevImages, imageUrlInput]);
      setImageUrlInput("");
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleZipFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.endsWith(".zip")) {
      setZipFile(file);
    } else {
      alert("Please upload a .zip file.");
    }
  };

  const handleClearAllImages = () => {
    setImages([]);
    setZipFile(null);
    setIsTrainingStarted(false);
    setTrainedImageUrl(null);
    setRightPanelExpanded(false);
    setIsLoading(false);
  };

  const handleTrainModel = () => {
    setIsLoading(true);
    setIsTrainingStarted(true);
    setRightPanelExpanded(true);

    // Smooth scroll to right panel (for smaller screens)
    setTimeout(() => {
      document.getElementById("right-panel")?.scrollIntoView({ behavior: "smooth" });
    }, 50);

    // Simulate an asynchronous operation
    setTimeout(() => {
      setTrainedImageUrl("https://via.placeholder.com/400x400?text=Trained+Image");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-6 bg-black min-h-screen text-white">
      {/* Left Panel */}
      <Card
        className={`bg-zinc-900 w-full ${
          rightPanelExpanded ? "lg:w-3/10" : "lg:w-7/10"
        } rounded-2xl shadow-lg p-6 transition-all duration-500 ease-in-out`}
      >
        <CardContent className="flex flex-col gap-4 text-white">
          <h2 className="text-xl font-semibold">Magnified</h2>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Images Data Url*</label>
            <div className="flex gap-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <Button
                variant="secondary"
                className="flex items-center gap-2"
                onClick={() => document.getElementById("image-upload")?.click()}
              >
                <ImagePlus size={16} /> Add Image
              </Button>

              <input
                type="file"
                accept=".zip"
                onChange={handleZipFileUpload}
                className="hidden"
                id="zip-upload"
              />
              <Button
                variant="secondary"
                onClick={() => document.getElementById("zip-upload")?.click()}
              >
                Pick a .zip file
              </Button>

              <Input
                placeholder="Add image URL"
                className="bg-zinc-800 border-zinc-700 flex-grow"
                value={imageUrlInput}
                onChange={(e) => setImageUrlInput(e.target.value)}
              />
              <Button variant="secondary" onClick={handleImageUrlAdd}>
                Add URL
              </Button>
            </div>
            <p className="text-xs text-gray-400">
              Hint: Drag and drop files from your computer, images from web pages,
              paste from clipboard (Ctrl/Cmd+V), or provide a URL.
            </p>
          </div>

          {/* Image Placeholder Grid */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative bg-zinc-800 flex items-center justify-center rounded-lg aspect-square border border-zinc-700 group"
              >
                <img
                  src={image}
                  alt={`uploaded-${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-1 right-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleRemoveImage(index)}
                >
                  <XCircle size={16} />
                </Button>
              </div>
            ))}
            {Array(Math.max(0, 4 - images.length))
              .fill(0)
              .map((_, i) => (
                <div
                  key={`placeholder-${i}`}
                  className="bg-zinc-800 flex items-center justify-center rounded-lg aspect-square border border-zinc-700"
                >
                  <ImagePlus className="text-zinc-500" />
                </div>
              ))}
          </div>

          {images.length > 0 && (
            <Button
              variant="destructive"
              onClick={handleClearAllImages}
              className="mt-4"
            >
              Clear All Images
            </Button>
          )}

          {/* Trigger Word */}
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-sm font-medium">Enter your prompt</label>
            <Input
              placeholder="Enter Prompt"
              className="bg-zinc-800 border-zinc-700"
            />
          </div>

          {/* Is Style Toggle */}
          <div className="flex items-center gap-2 mt-2">
            <Switch checked={isStyle} onCheckedChange={setIsStyle} />
            <span className="text-sm">Is Style</span>
          </div>

          {/* Additional Settings */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm font-medium">Additional Settings</span>
            <Button variant="ghost" size="icon">
              <MoreHorizontal />
            </Button>
          </div>

          {/* Train Model Button */}
          <Button
            className="mt-6 bg-blue-600 hover:bg-blue-700"
            onClick={handleTrainModel}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
              </span>
            ) : (
              "Generate Images"
            )}
          </Button>
        </CardContent>
      </Card>

      <Card
        id="right-panel"
        className={`bg-zinc-900 w-full ${
          rightPanelExpanded ? "lg:w-7/10" : "lg:w-3/10"
        } rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-500 ease-in-out`}
      >
        {isTrainingStarted ? (
          isLoading ? (
            <p className="text-gray-400 text-sm">Generating images...</p>
          ) : trainedImageUrl ? (
            <img
              src={trainedImageUrl}
              alt="Trained Model Output"
              className="max-w-full h-auto rounded-lg"
            />
          ) : (
            <p className="text-gray-400 text-sm">No image generated yet.</p>
          )
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-2">Training history</h2>
            <p className="text-gray-400 text-sm">Nothing here yet...</p>
            <p className="text-xs text-gray-500 text-center mt-2">
              Fine-tune your training parameters and start right now.
            </p>
          </>
        )}
      </Card>
    </div>
  );
}
