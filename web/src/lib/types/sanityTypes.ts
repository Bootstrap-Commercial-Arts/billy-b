import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
};

/**
 * siteSettings
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: "siteSettings";

  /**
   * Site Name — `string`
   *
   *
   */
  siteName?: string;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Phone — `string`
   *
   *
   */
  phone?: string;

  /**
   * SEO Settings — `seoSettings`
   *
   *
   */
  seoSettings?: SeoSettings;
}

/**
 * Shows
 *
 *
 */
export interface Shows extends SanityDocument {
  _type: "shows";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Teacher Guide — `reference`
   *
   *
   */
  guide?: SanityReference<Guides>;
}

/**
 * Lyrics
 *
 *
 */
export interface Lyrics extends SanityDocument {
  _type: "lyrics";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Lyric Content — `blockContent`
   *
   *
   */
  lyricContent?: BlockContent;
}

/**
 * Albums
 *
 *
 */
export interface Albums extends SanityDocument {
  _type: "albums";

  /**
   * Album Name — `string`
   *
   *
   */
  albumName?: string;

  /**
   * Album Cover — `image`
   *
   *
   */
  albumCover?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Album Purchase Url — `url`
   *
   *
   */
  purchaseUrl?: string;

  /**
   * Songs — `array`
   *
   *
   */
  songs?: Array<SanityKeyedReference<Lyrics>>;
}

/**
 * Teacher Guides
 *
 *
 */
export interface Guides extends SanityDocument {
  _type: "guides";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Text Content — `blockContent`
   *
   *
   */
  textContent?: BlockContent;
}

export type SeoSettings = {
  _type: "seoSettings";
  /**
   * SEO Title — `string`
   *
   * e.g. Billy B | Educational Song & Dance Man
   */
  seoTitle?: string;

  /**
   * SEO Meta Description — `text`
   *
   * A general description for the website.
   */
  seoMetaDescription?: string;

  /**
   * SEO Preview Image — `image`
   *
   * The site wide Social Media Preview Card default.
   */
  previewImage?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * SEO Preview Image Alternative Text — `string`
   *
   * Text to be read by screen readers, and shown if image fails to load.
   */
  previewImageAlt?: string;
};

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityAsset;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Documents = SiteSettings | Shows | Lyrics | Albums | Guides;
