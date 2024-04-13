import { GalleryPage } from "@/components";
import { galleryImg } from "@/constants";
import { useParams } from "react-router-dom";

export default function GalleryPagination() {
  const { id } = useParams();

  // Convert the page query parameter to a number
  const currentPage = parseInt(id, 10) || 1;
  const itemsPerPage = 6;

  // Calculate the start and end indexes of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  // Calculate the total number of pages
  const totalPages = Math.ceil(galleryImg.length / itemsPerPage);

  // Slice the galleryImg array to get the images for the current page
  const currentPageImages = galleryImg.slice(startIndex, endIndex);

  return (
    <GalleryPage
      currentPage={currentPage}
      totalPages={totalPages}
      images={currentPageImages}
    />
  );
}
