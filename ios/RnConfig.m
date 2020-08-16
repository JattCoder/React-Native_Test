#import "RnConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  NSString* service_key = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"Service Key"];
  return @{ @"ServiceKey": service_key };
}

+ (BOOL)requiresMainQueueSetupv
{
    return NO;
}

@end
