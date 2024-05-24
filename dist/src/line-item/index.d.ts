import type { XandrClient } from '..';
import type { LineItem, PostLineItemParameters, PutLineItemParameters, GetLineItemParameters, ModifyLineItemParameters, ModifyLineItemModelParameters, LineItemModelId } from './types';
export declare class XandrLineItemClient {
    private readonly client;
    private readonly endpoint;
    private readonly defaultHeaders;
    constructor(client: XandrClient);
    get(params: GetLineItemParameters): Promise<LineItem[]>;
    search(searchTerm: string): Promise<LineItem[]>;
    add(advertiserId: number, lineItem: PostLineItemParameters): Promise<LineItem>;
    modify(params: ModifyLineItemParameters, lineItem: PutLineItemParameters): Promise<LineItem>;
    delete(params: ModifyLineItemParameters): Promise<void>;
    getModel(lineItemId: number): Promise<LineItemModelId[]>;
    associateOrModify(lineItemId: number, lineItemModelId: ModifyLineItemModelParameters): Promise<LineItemModelId[]>;
    deleteModel(lineItemId: number, lineItemModelId: ModifyLineItemModelParameters): Promise<void>;
}
