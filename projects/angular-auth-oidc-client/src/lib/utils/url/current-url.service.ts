import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CurrentUrlService {
  private readonly document: Document = inject(DOCUMENT);

  getStateParamFromCurrentUrl(url?: string): string | null {
    const currentUrl = url || this.getCurrentUrl();

    if (!currentUrl) {
      return null;
    }

    const parsedUrl = new URL(currentUrl);
    const urlParams = new URLSearchParams(parsedUrl.search);

    return urlParams.get('state');
  }

  getCurrentUrl(): string | null {
    console.log(this.document?.defaultView?.location);
    return this.document?.defaultView?.location.toString() ?? null;
  }
}
