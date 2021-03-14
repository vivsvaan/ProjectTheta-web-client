import { Injectable } from '@angular/core';
import { OverlayConfig, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class HelperService {
    /**
     * Type of message used on showMessage method
     */
    MESSAGE_TYPE = {
        WARNING: 1,
        ERROR: 2,
        SUCCESS: 3,
        NONE: 4,
    };

    constructor(private overlay: Overlay, private _snackBar: MatSnackBar) {}

    /**
     * To make a duplicate copy of object
     * @param obj Any object
     */
    clone(obj: any): any {
        return JSON.parse(JSON.stringify(obj));
    }

    /**
     * Show toast message using Materialize Toast
     * @param message Message to show
     * @param messageType Type of message (warning/error/success)
     * ToDo: added different messages for different message types
     */
    showMessage(
        message: string,
        messageType: number = this.MESSAGE_TYPE.SUCCESS
    ): void {
        this._snackBar.open(message.trim(), '', { duration: 2000 });
    }

    /**
     * Open the cdk base dialog with provided component
     */
    openDialog(component: any, dialogConfig: DialogConfig): DialogInfo {
        const config = new OverlayConfig();
        config.width = dialogConfig.width;
        config.minWidth = dialogConfig.minWidth;
        config.maxWidth = dialogConfig.maxWidth;
        config.height = dialogConfig.height;
        config.maxHeight = dialogConfig.maxHeight;

        config.positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        config.hasBackdrop = true;
        config.backdropClass = dialogConfig.backdropClass;

        const componentOverlayRef = this.overlay.create(config);
        const componentPortal = new ComponentPortal(component);
        const componentRef = componentOverlayRef.attach(componentPortal);

        // tslint:disable-next-line: no-use-before-declare
        const _dialogInfo = new DialogInfo({
            componentRef: componentRef.instance,
            overlayRef: componentOverlayRef,
        });
        return _dialogInfo;
    }
}

/**
 * Config object for dialog
 */
export class DialogConfig {
    width: string;
    minWidth: string;
    maxWidth: string;

    maxHeight: string;
    height: string;

    backdropClass: string;

    constructor(data: {
        width?: string;
        minWidth?: string;
        maxWidth?: string;
        maxHeight?: string;
        height?: string;
        backdropClass: string;
    }) {
        this.width = data.width || '50vw';
        this.minWidth = data.minWidth || '600px';
        this.maxWidth = data.height || '750px';
        this.maxHeight = data.maxHeight || '85vh';
        this.height = data.height || 'auto';
        this.backdropClass = data.backdropClass;
    }
}

export class DialogInfo {
    componentRef: any;
    overlayRef: OverlayRef;

    constructor(data: { componentRef: any; overlayRef: OverlayRef }) {
        this.componentRef = data.componentRef;
        this.overlayRef = data.overlayRef;
    }
}
