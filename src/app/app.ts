import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('website');

  items: any[] = [
    { id: 1, name: "Jayan", email: "jayan@test.com", num: Math.random() },
    { id: 2, name: "Priya", email: "priya@example.com", num: Math.random() },
    { id: 3, name: "Rahul", email: "rahul@example.com", num: Math.random() },
    { id: 4, name: "Sneha", email: "sneha@example.com", num: Math.random() },
    { id: 5, name: "Arjun", email: "arjun@example.com", num: Math.random() },
    { id: 6, name: "Meena", email: "meena@example.com", num: Math.random() },
    { id: 7, name: "Vikram", email: "vikram@example.com", num: Math.random() },
    { id: 8, name: "Anjali", email: "anjali@example.com", num: Math.random() },
    { id: 9, name: "Ravi", email: "ravi@example.com", num: Math.random() },
    { id: 10, name: "Divya", email: "divya@example.com", num: Math.random() }
  ];

  // Form model for add/edit
  formModel = {
    id: null,
    name: '',
    email: ''
  };

  isEditing = false;
  editingIndex = -1;

  addItem(): void {
    if (!this.formModel.name || !this.formModel.email) return;

    const newItem = {
      id: this.items.length + 1,
      name: this.formModel.name,
      email: this.formModel.email,
      num: Math.random()
    };
    this.items.push(newItem);
    this.clearForm();
  }

  editItem(index: number): void {
    this.isEditing = true;
    this.editingIndex = index;
    const item = this.items[index];
    this.formModel = { ...item };
  }

  updateItem(): void {
    if (this.editingIndex >= 0) {
      this.items[this.editingIndex] = {
        ...this.formModel,
        num: this.items[this.editingIndex].num // Keep the original random number
      };
    }
    this.clearForm();
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
    this.clearForm();
  }

  clearForm(): void {
    this.formModel = { id: null, name: '', email: '' };
    this.isEditing = false;
    this.editingIndex = -1;
  }
}
