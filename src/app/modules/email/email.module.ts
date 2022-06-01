import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmailRoutingModule } from "./email-routing.module";
import { EmailComponent } from "./email.component";
import { InboxComponent } from "./inbox/inbox.component";
import { ReadComponent } from "./read/read.component";
import { ComposeComponent } from "./compose/compose.component";
import { MailServiceComponent } from "./read/mail-service/mail-service.component";
import { MailMessageComponent } from "./read/mail-message/mail-message.component";
import { MailInboxComponent } from "./inbox/mail-inbox/mail-inbox.component";
import { MailComposeComponent } from "./compose/mail-compose/mail-compose.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";

@NgModule({
  declarations: [
    EmailComponent,
    InboxComponent,
    ReadComponent,
    ComposeComponent,
    MailServiceComponent,
    MailMessageComponent,
    MailInboxComponent,
    MailComposeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    EmailRoutingModule,
  ],
})
export class EmailModule {}
