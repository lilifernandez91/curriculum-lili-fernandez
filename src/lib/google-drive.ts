/** ID del archivo a partir de enlaces de vista o `open?id=`. */
export function extractGoogleDriveFileId(url: string): string | null {
  const fromFile = url.match(/\/file\/d\/([^/]+)/);
  if (fromFile?.[1]) return fromFile[1];
  const fromQuery = url.match(/[?&]id=([^&]+)/);
  if (fromQuery?.[1]) return fromQuery[1];
  return null;
}

/**
 * URL de la miniatura que genera Drive (1.ª página aprox. en PDFs).
 * Público: "Cualquiera con el enlace". Google admite `sz=wNNN` o `sz=sNNN` según archivos.
 */
export function googleDriveThumbnailUrl(
  fileId: string,
  size = 1000,
  sizeMode: "w" | "s" = "s",
): string {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=${sizeMode}${size}`;
}
