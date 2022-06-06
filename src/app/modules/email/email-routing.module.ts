import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComposeComponent } from "./compose/compose.component";
import { MailComposeComponent } from "./compose/mail-compose/mail-compose.component";

import { EmailComponent } from "./email.component";
import { InboxComponent } from "./inbox/inbox.component";
import { MailInboxComponent } from "./inbox/mail-inbox/mail-inbox.component";
import { MailMessageComponent } from "./read/mail-message/mail-message.component";
import { ReadComponent } from "./read/read.component";

const routes: Routes = [
  {
    path: "",
    component: EmailComponent,
    children: [
      {
        path: "inbox",
        component: MailInboxComponent,
        data: {
          breadcrumb: "Inbox",
        },
      },
      {
        path: "read",
        component: MailMessageComponent,
        data: {
          breadcrumb: "Read",
          animation: "isRight",
        },
      },
      {
        path: "compose",
        component: MailComposeComponent,
        data: {
          breadcrumb: "Compose",
          animation: "isLeft",
        },
      },
      {
        path: "",
        redirectTo: "/inbox",
        pathMatch: "full",
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailRoutingModule {}
