import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  loading = signal(false);
  error = signal<string | null>(null);
  constructor() { }

  startLoading(){
    this.loading.set(true);
  }

  stopLoading(){
    this.loading.set(false);
  }

  setError(message:string){
    this.error.set(message);
  }

  clearError(){
    this.error.set(null);
  }
}
