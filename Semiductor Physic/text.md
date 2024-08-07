# Create the markdown content
markdown_content = """
# Day 14: ng-template, ngTemplateOutlet và ng-container trong Angular

## ng-template

Trong bài viết thứ tư của series, anh @tiepphan đã nói có nói đến một trường hợp dùng `ng-template`. Đó là khi dùng `*ngIf` với điều kiện else, chúng ta có thể truyền vào một template reference được định nghĩa thông qua cú pháp `#templateReferenceName` để render lên UI.

```html
<div *ngIf="user.age >= 13; else noPG13">Bạn có thể xem nội dung PG-13</div>
<ng-template #noPG13>
  <div>Bạn không thể xem nội dung PG-13</div>
</ng-template>
